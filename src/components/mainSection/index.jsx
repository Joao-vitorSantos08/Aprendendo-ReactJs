import ReactImage from '../assets/image/react.jpg'
import './style.css'
import Card from '../card/index'

const MainSection = () => {
    return(
        <main>
            <img src={ReactImage} alt="Imagem do logo react com uma pessoa de fundo" title='React'/>
            <h2>Aprenda com projetos reais</h2>
            <p>Aprenda com projetos reais e desenvolva suas habilidades de forma prática e eficiente, enfrentando desafios que refletem o mercado de trabalho.</p>
            
            <div className="card-grid">

               <Card title="JavaScript Moderno"
               decription="Do básico ao avançado com foco em lógica e projetos." />

               <Card title="ReactJs na prática" 
               decription="Componentes. props, hooks e consumo de api"/>

               <Card title="UX / UI" 
               decription="UX e UI unidos para criar experiências claras, bonitas e funcionais."/>
               
               <Card title="ReactJs na prática" 
               decription="Componentes. props, hooks e consumo de api"/>

               <Card title="Bootstrap" 
               decription="Bootstrap é um framework para criar sites responsivos com facilidade."/>

               <Card title="ReactJs na prática" 
               decription="Componentes. props, hooks e consumo de api"/>

                <Card title="UX / UI" 
               decription="UX e UI unidos para criar experiências claras, bonitas e funcionais."/>

               <Card title="ReactJs na prática" 
               decription="Componentes. props, hooks e consumo de api"/>
               
               <Card title="Bootstrap" 
               decription="Bootstrap é um framework para criar sites responsivos com facilidade."/>

            </div>

        </main>
    )
}

export default MainSection