import { Title } from "../../shared/title";
import { Paragraph } from "../../shared/paragraph";

import * as images from "../../assets"


function Home() {
  return (
    <div className="flex flex-wrap justify-around items-center  my-9 w-9/12 m-auto gap-20">
      <div className="flex flex-col text-leftm-auto gap-5">
        <div className="text-blue-400 text-3xl font-bold max-w-[300px]">
          <Title title="Olá, seja bem vindo(a) ao Larean" />
        </div>
        <div className="text-blue-400 font-bold max-w-[400px]">
            <Paragraph
                text="Estamos trabalhando e logo retornaremos com mais notícias"
            />
        </div>
      </div>

      <img src={images.Banner} alt="" className="w-2/5" />
    </div>
  );
}
export default Home;
