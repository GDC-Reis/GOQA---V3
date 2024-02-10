//CSS
import './Home.css';

//Components
import Card from '../../components/Card';
import Img_BG from '../../components/Img_BG';
import InfoEmpresa from '../../components/InfoEmpresa';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';
import Diferenciais from '../../components/Diferenciais';

const Home = () => {
    return ( 
        <body>

                <div className='container_img_bg'>
                    <Img_BG className='teste_img'/>
                    <div className='container_img_bg_intro_text'>
                        <span>GOQA </span> <br/> <span>QUALITY ASSURANCE</span>
                    </div>
                </div>

                <div className='container_infoEmpresa'>
                    <InfoEmpresa/>
                </div>

                <div className='container_card_info'>
                    <h1 className='container_card_info__title'>Serviços Oferecidos</h1>
                    
                    <div className='container_card_info__itens'>
                        <Card 
                                h2="Testes Funcionais" 
                                p="Os testes funcionais são recomendados quando:" 
                                li1="Exploratórios, com ou sem documentação."
                                li2="Para simular cenários que não valem a pena serem automatizados."/>

                        <Card       
                                h2="Testes Automatizados"
                                p="Os testes automatizados são recomendados quando:"
                                li1="Requerem diferentes conjuntos de dados."
                                li2="Atualizados com alta frequência e muito repetitivos."
                                li3="Executados em várias plataformas de software e hardwares."/>

                        <Card 
                                h2="Serviços de UI/UX"
                                p="Recomendados quando você deseja:"
                                li1="Avaliar a Interface e usabilidade do software"
                                li2="Realizar o design ou redesign do software"
                                li3="Entender o comportamento dos usuários"/>

                        
                        <Card 
                                h2="Recrutamento"
                                p="Recomendado quando você deseja:"
                                li1="Montar sua própria equipe de Testes."/>

                        <Card 
                                h2="Consultoria"
                                p="Não tem ideia por onde começar ?" 
                                li1="Entre em contato conosco, teremos o maior prazer em entender todos os aspectos do seu negócio e apresentar a vocês a solução que melhor lhe convier"/>

                        <Card 
                                h2="Treinamentos"
                                p="Recomendados quando você deseja:"
                                li1="Vamos dar um UP na sua equipe de testes com treinamentos focado em teste de software (online ou presencial)"/>

                        
                    </div>

                    <div className='container_main_diferenciais'>
                        
                        <div className='teste_title'><h1>Nossos Diferenciais</h1></div>
                        
                        <div className='container_diferenciais'>
                                <Diferenciais
                                        h2="Pesquisadores e Profissionais"
                                        p="Nossos colaboradores são altamente capacitados para agregar valor ao seu negócio."/>

                                <Diferenciais
                                        h2="Especialistas em Qualidade"
                                        p="Estamos sempre atentos nas tecnologias atuais e inovações do mercado e da academia."/>

                                <Diferenciais
                                        h2="Foco no seu negócio"
                                        p="Através de serviços personalizados, direcionamos o foco no que mais impacta no seu negócio."/>

                        </div>
                   </div>


                    <div className='container_contato'>
                            <Contato/>
                    </div>
                    
                </div>

                <div>
                    <Footer/>
                </div>

        </body>
        
     );
}
 
export default Home ;