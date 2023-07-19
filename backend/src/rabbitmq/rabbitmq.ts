import amqp from "amqplib";

const QUEUE_NAME = "lareanagenda";
const PALAVRA_ESPERADA = "esperado";
const TEMPO = 10000;

export async function enviarParaFila(mensagem: any): Promise<void> {
  try {
    const connection = await amqp.connect(
      "amqp://larean:Lucas102030@89.117.51.204:5672/larean"
    );
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE_NAME);
    channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(mensagem)));
    console.log(`Mensagem enviada para a fila: ${JSON.stringify(mensagem)}`);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error("Erro ao enviar mensagem para a fila:", error);
  }
}

export async function receberDaFila(): Promise<void> {
  try {
    const connection = await amqp.connect(
      "amqp://larean:Lucas102030@89.117.51.204:5672/larean"
    );
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE_NAME);
    channel.consume(QUEUE_NAME, (mensagem) => {
      if (mensagem) {
        const conteudoMensagem = mensagem.content.toString();
        console.log(`Mensagem recebida da fila: ${conteudoMensagem}`);

        if (conteudoMensagem.includes(PALAVRA_ESPERADA)) {
          console.log("Mensagem contém a palavra esperada. Processando...");

          // Coloque aqui a lógica de processamento da mensagem

          // Se tudo correr bem, confirme a mensagem (remove da fila)
          channel.ack(mensagem);
        } else {
          console.error(
            "Mensagem com conteúdo diferente da palavra esperada. Rejeitando..."
          );
          // Caso a mensagem não contenha a palavra esperada, você pode optar por rejeitá-la (não confirmar) para que ela permaneça na fila e seja processada novamente.
          // Se não confirmar a mensagem (não chamar channel.ack(mensagem)), ela ficará na fila para ser processada novamente.
          // Note que, se não confirmar a mensagem, o RabbitMQ tentará entregá-la a outro consumidor (se houver) após um período de timeout.
          setTimeout(() => {
            channel.reject(mensagem, false);
          }, TEMPO);
        }
      }
    });
  } catch (error) {
    console.error("Erro ao receber mensagem da fila:", error);
  }
}
