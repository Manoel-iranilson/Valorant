import React from "react";
import ReactPlayer from "react-player";
// import { Container } from './styles';

const HistoryDetail: React.FC = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#1C1C1C" }}>
        <header className="container fs-4 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none text-white"
          >
            VALORANT
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="/agents"
                className="nav-link px-2 link-danger text-white"
              >
                Agentes
              </a>
            </li>
            <li>
              <a
                href="/Weapons"
                className="nav-link px-2 link-danger text-white"
              >
                Armas
              </a>
            </li>
            <li>
              <a
                href="/History"
                className="nav-link px-2 link-danger text-white"
              >
                Historia
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div className="container bg-light">
        <div>
          <h1>Historia</h1>
          <p className="fs-5 ">
            Tudo começa em 2039, em um futuro relativamente próximo, quando
            ocorre um evento conhecido como Primeira Luz. O fenômeno, que
            acontece em diversos lugares do mundo, consiste no surgimento de
            estranhos anéis de luz que trazem um novo elemento para o planeta
            Terra. A radianita, até então desconhecida, é extremamente poderosa
            e se torna importantíssima para toda a humanidade.
          </p>
          <div>
            <ReactPlayer
              className="react-player"
              width="100%"
              url="https://youtu.be/JxyAt2d4W4Q"
            />
          </div>
        </div>
        <div>
          <p className="mt-2 fs-5">
            Após a Primeira Luz, alguns indivíduos expostos à radianita sofrem
            mutações e ganham poderes, passando a ser conhecidos como radiantes.
            As habilidades dessas pessoas muitas vezes são simples, mas alguns
            indivíduos têm poderes incríveis, capazes de torná-los imortais,
            viajar entre realidades e até mesmo trazer pessoas de volta à vida.
            Como nem todos os radiantes acabam do "lado do bem", usando os
            poderes em prol da humanidade, é criado o Protocolo Valorant.
            Fundado por um grupo misterioso sob a tutela da corporação Kingdom,
            o objetivo do projeto é manter os radiantes sob controle, com a
            missão de proteger o planeta em caso de outros indivíduos com
            habilidades especiais se tornarem um problema. Além de pessoas com
            poderes originados da radianita, o protocolo conta com agentes
            "comuns", pessoas sem habilidades despertadas na Primeira Luz. Esses
            agentes são treinados para manipular armas e equipamentos criados e
            fornecidos pela Kingdom utilizando o novo elemento, sendo então
            capazes de enfrentar radiantes em pé de igualdade.
          </p>
          <div>
            <ReactPlayer
              className="react-player"
              width="100%"
              url="https://youtu.be/e_E9W2vsRbQ"
            />
          </div>
        </div>
        <div>
          <p className="mt-2 fs-5">
            <h3>Os dois mundos de Valorant</h3>
            <br />O que parece uma missão simples — proteger o mundo de
            potenciais ameaças radiantes — se torna muito mais complicado quando
            um novo inimigo surge. Em um universo espelhado, uma versão muito
            similar da Terra passa pelo mesmo evento da Primeira Luz, gerando
            pessoas com poderes despertados pela radianita e resultando no
            surgimento do Protocolo Valorant. Na versão espelhada da Terra,
            porém, o elemento especial está cada vez mais escasso, ameaçando a
            sobrevivência dos habitantes. A revelação da existência da "Terra 2"
            só acontece 10 anos depois do fenômeno global, quando Phoenix, um
            agente do Protocolo, encontra Jett instalando um dispositivo chamado
            Spike nas ruas de Veneza (Itália). Os dois acabam brigando, com a
            moça levando a melhor e derrotando o rapaz, que ao despertar percebe
            que o pior aconteceu: o aparelho causou uma onda de destruição que
            deixou parte do local flutuando no ar. O desastre cai na conta da
            Kingdom, já que o público não recebe a mesma informação que Phoenix:
            aquela não era a Jett que ele conhecia. Na realidade, a Duelista da
            Coreia do Sul encontrada na Itália era uma versão espelhada da
            agente Valorant. Além disso, o dispositivo usado por ela sugou a
            radianita do ambiente e o enviou para outra dimensão.
          </p>
          <div>
            <ReactPlayer
              className="react-player"
              width="100%"
              url="https://youtu.be/sE3UqyzKR30"
            />
          </div>
        </div>
        <div>
          <p className="mt-2 fs-5">
            <h3>Ataques e revelações</h3>
            <br />
            No dia seguinte, Phoenix é informado de um segundo ataque e vai até
            o local com Viper. Killjoy já atuava tentando desativar o Spike
            instalado pelos agentes do espelhoverso e, ao chegar ao local, o
            Duelista percebe uma movimentação e sai em perseguição. Quando
            finalmente alcança o suspeito, Phoenix é pego de surpresa ao
            descobrir ser seu "gêmeo do mal", uma versão de si mesmo vinda da
            Terra 2. Quando Viper finalmente os alcança, o segundo Phoenix
            consegue fugir, e a dupla retorna ao lugar onde Killjoy tenta parar
            o dispositivo. A moça explica que até conseguiria desativar o Spike,
            mas que para isso seria necessário muito mais poder do que o núcleo
            de radianita dela era capaz de oferecer. Em uma resposta suspeita,
            Viper pede a Phoenix que use seu poder para superaquecer o núcleo do
            equipamento, o que torna a radianita muito mais poderosa e permite
            que Killjoy finalmente desarme o Spike. Só então Viper revela a
            Phoenix tudo o que sabe sobre o universo paralelo e as versões
            espalhadas dos agentes do Protocolo Valorant. Algum tempo depois,
            Phoenix — agora com todas as informações sobre as versões "do mal"
            dos agentes do projeto — é enviado para investigar mais um ataque.
            Ao lado de Yoru, ele vai até o Ártico, em uma área de escavação
            secreta da Kingdom conhecida como Icebox. Apesar de estar em número
            muito menor, a dupla sai vitoriosa e impede os planos dos membros da
            Valorant do mundo-espelho.
          </p>
          <div>
            <ReactPlayer
              className="react-player"
              width="100%"
              url="https://youtu.be/UHFha439Rt8"
            />
            <p className="mt-2 fs-5">
              <br />
              Logo após, aparece a Kay/o, um agente vindo do futuro e que foi
              criado para acabar com a guerra entre radiantes e humanos. Em sua
              realidade, usando seus poderes de anulação de radianita, o agente
              elimina Reyna — a rainha dos radiantes — e dá um fim à guerra. Em
              seguida, ele usa sua avançada tecnologia para sair de sua linha do
              tempo, indo parar no mundo do jogo e informando aos membros do
              Protocolo Valorant a potencial ameaça dos radiantes.
            </p>
          </div>
          <div>
            <p className="mt-2 fs-5">
              <h3>Segredos e reviravoltas de Valorant</h3>
              <br />
              Como humanos e pessoas com superpoderes estão trabalhando em
              conjunto contra a Terra 2 no projeto supervisionado pela Kingdom,
              o alerta de Kay/o acaba ficando em segundo plano. Quem também está
              trabalhando em conjunto com outra pessoa é Chamber, que
              secretamente vem conspirando com sua versão do espelhoverso para
              atacar a Kingdom. A empresa está trabalhando em um projeto secreto
              capaz de acabar com a batalha entre os dois mundos. Em Santa Fé,
              no Novo México, as versões da corporação da Terra 1 e do mundo
              espelhado criam um complexo de pesquisas altamente confidencial no
              qual tentam criar energia infinita.
            </p>
            <div>
              <ReactPlayer
                className="react-player"
                width="100%"
                url="https://youtu.be/XhAOpKRSZ20"
              />
            </div>
          </div>
          <div>
            <p className="mt-2 fs-5">
              <br />O trabalho de cientistas dos dois mundos cria um Colisor de
              Radianita, com o objetivo de gerar uma fonte de energia para
              suprir a demanda do mundo-espelho. Isso de quebra daria um fim aos
              ataques ao mundo "original" e impediria o impacto na sociedade
              caso o elemento também ficasse escasso na Terra 1. Os dois
              Chambers acabam juntos com o Colisor, causando muita destruição e
              resultando na criação do mapa Fracture. Isso também leva a um
              crescimento na desconfiança dos líderes da empresa nas duas
              Terras, levando o mundo-espelho a retomar os ataques em busca de
              mais radianita. Em uma tentativa de entrar em contato com o
              Protocolo Valorant do espelhoverso, Brimstone e Viper começam a
              buscar formas de viajar para o mundo paralelo e tentar entrar em
              algum tipo de acordo de paz, mas acabam sendo capturados no
              processo. Chamber salva a dupla e é recrutado para fazer parte do
              Protocolo Valorant, tornando-se oficialmente um agente do projeto.
            </p>
            <div>
              <ReactPlayer
                className="react-player"
                width="100%"
                url="https://youtu.be/8MwJ2ZABa2I"
              />
            </div>
            <p className="mt-2 fs-5">
              <br />
              Enquanto isso, Viper e Cypher ficam encarregados de encontrar
              informações sobre a tecnologia usada pela Kingdom em Fracture,
              onde a empresa se mostra capaz de transportar pessoas e recursos
              entre as duas Terras. A missão acaba falhando, mas Killjoy
              inesperadamente informa Brimstone dos avanços na pesquisa,
              proporcionados pelas cópias dos esquemas das máquinas usadas no
              complexo da Kingdom e encontradas por ninguém menos do que
              Chamber. Agora, o time pode finalmente se preparar para virar o
              jogo e visitar o mundo paralelo para tentar acabar de vez com os
              conflitos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryDetail;
