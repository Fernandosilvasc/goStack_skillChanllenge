import React from 'react';

import {
  Wrapper,
  SectionOne,
  Blur,
  BoxIntro,
  BoxContent,
  SectionTwo,
  BoxContentTwo,
  BoxContentThree,
  ParallelogramBG,
  FilmDescriptionContainer,
  Footer,
} from './styles';

import { ReactComponent as BlurImg } from '../../assets/blur.svg';
import { ReactComponent as ImgFilm } from '../../assets/imgFilm.svg';
import ImgFCS from '../../assets/fcs.png';
import BobMarley from '../../assets/bob_marley.jpg';
import ThomasEd from '../../assets/ThomasEd.png';

const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <SectionOne>
          <Blur>
            <img src={ImgFCS} alt="FCS" />
            <BlurImg />
          </Blur>
          <BoxIntro>
            <h1>Uma viagem sem destino, porém sem retorno.</h1>
            <h2>... por Fernando Corrêa da Silva</h2>
            <p>Fala Dev`s,</p>
            <p>Tudo bem com vocês?</p>
            <p>
              Talvez alguns de vocês acordaram em um belo dia e se perguntaram
              &quot; Porque não consigo ser feliz, mesmo tendo tudo ao meu redor
              ? &quot;.
            </p>
            <p>
              Enumeras vezes me deparei com esse pensamento, mas não conseguia
              interpretar a razão de ele existir em uma vida ao qual sempre foi
              agraciado e abençoado por Deus.
            </p>
            <p>
              Porém ao passar dos anos fui compreender que isto estava
              correlacionado ao meu propósito de vida. Então comecei a me
              perguntar &quot; O que me faz acordar todos os dias e querer
              evoluir como ser humano ? &quot; , talvez a resposta seja muito
              complexa para se relatar, mais rapidamente percebi que se quisesse
              mudar esse cenário, somente eu poderia fazer algo por mim.
            </p>
          </BoxIntro>
          <BoxContent>
            <h1>Você realmente está disposto a mudar ?</h1>
            <p>
              Essa é uma das perguntas que sempre me fiz e posso dizer que nem
              sempre respondi com SIM.
            </p>
            <p>
              Por mais fácil que seja as vezes respondermos com SIM, nós não
              estamos preparados para tal mudança, e me arrisco dizer que nunca
              estaremos.
            </p>
            <p>
              Mas o que difere de nós alcançar ou não esse destino será nossa
              &quot;RESILIÊNCIA&quot;. Talvez você me pergunte ”Somente isso é
              necessario? e eu responderia que não, diria que as demais
              habilidades irão te complementar, porém, a &quot;RESILIÊNCIA&quot;
              te sustentara de pé.
            </p>
            <div>
              <img src={BobMarley} alt="BobMarley" />
              <div>
                <p>
                  “ Você não sabe o quão forte você é até que ser forte é a
                  única opção que lhe resta. ”
                </p>
                <span>-Bob Marley</span>
              </div>
            </div>
          </BoxContent>
        </SectionOne>

        <SectionTwo>
          <ParallelogramBG />
          <FilmDescriptionContainer>
            <div>
              <h1>à PROCURA da FELICIDADE</h1>
              <p>
                Acredito que muitos de vocês tiveram a oportunidade de assistir
                esse filme, mas caso não, recomendo que reserve um tempo e
                assista.
              </p>
              <p>
                O filme é baseado na história real de Chris Gardner, que fundou
                sua própria empresa e hoje se dedica também à contar sua
                inspiradora história de vida.
              </p>
              <p>
                Chris alcançou seu objetivo pela sua &quot;RESILIÊNCIA&quot; aos
                demais interperes da vida, e por enumeras vezes que se levantou
                a cada ”Não” que a vida lhe proporcionava.
              </p>
              <a
                href="https://www.netflix.com/title/70044605"
                target="_blank"
                rel="noreferrer"
              >
                ASSISTA AGORA -&gt;
              </a>
            </div>

            <ImgFilm />
          </FilmDescriptionContainer>

          <BoxContentTwo>
            <h1>
              Então a &quot;Resiliência&quot; é uma skill que devemos
              desenvolver?
            </h1>
            <p>
              Fui indagado a responder qual seria a melhor soft skill que um
              desenvolvedor deve possuir hoje e porque ela deve ser a mais
              importante entre as demais. Acredito que vocês já sabem qual foi a
              minha resposta, &quot;RESILIÊNCIA&quot;.
            </p>
            <p>
              Mas para que não seja aqui somente minha opnião, deixa eu te
              mostra o significado dessa simples palavra
            </p>
            <p>
              “Resiliência no mundo científico é a capacidade de um corpo voltar
              a sua forma original após sofrer uma deformação ou choque.”
            </p>
            <p>
              Agora se buscarmos por um conceito psicológico de resiliência,
              então encontraremos a seguinte definição:
            </p>
            <p>
              “A resiliência é um aspecto psicológico, definido como a
              capacidade de um indíviduo lidar com problemas, superar obstáculos
              ou resistir à pressão de situações adversar-choquem extresse etc.-
              sem entrar em surto psicológico.”
            </p>
          </BoxContentTwo>
          <BoxContentThree>
            <img src={ThomasEd} alt="ThomasEdison" />
            <div>
              <p>
                Podemos perceber o qual forte é essa habilidade somente lendo
                esses dois conceitos. Porém talvez você concordasse com a minha
                opinião se eu te mostrasse algo mais concreto ou palpável.
              </p>
              <p>
                Então te convido a voltarmos em 1879, para lembrar de um fato
                que mudou o mundo.
              </p>
              <p>
                “Naquela época com 32 anos Thomas Edison e sua equipe acabavam
                de concluir a invenção da lâmpada elétrica, tão somente após
                falharem 1200 vezes até alcançar o seu êxito.”
              </p>
              <p>
                Acredito que agora não temos mais dúvida do qual importante é
                desenvolvermos essa habilidade em nós, porque nada adiantará ter
                as demais skills se eu e você não souber levantar a cabeça e
                seguir em frente toda vez que falharmos nesta vida.
              </p>
            </div>
          </BoxContentThree>
        </SectionTwo>
        <Footer>
          <span> Copyright © 2020 Fernando Corrêa da Silva </span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Home;
