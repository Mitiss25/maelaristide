<script>
import HeaderItem from './components/HeaderItem.vue'
import TitreMael from './components/TitreMael.vue'
import ProjetItem from './components/ProjetItem.vue'
import WrapItem from './components/WrapItem.vue'
import FooterItem from './components/FooterItem.vue'

export default {

  data(){
    return {
      projet1: {
        skills: ['Figma', 'Illustrator', 'Photoshop', 'After effect'],
        details: ['Identité visuelle', 'animation site web', 'poster pub', 'maquette site web']
      },
      projet2: {
        skills: ['Figma', 'Illustrator', 'Photoshop', 'blender', 'Indesign'],
        details: ['Identité visuelle', 'réalisation 3D', 'poster com', 'maquette site web', 'mise en page']
      },
      projet3: {
        skills: ['Figma', 'Illustrator', 'Photoshop', 'After effect'],
        details: ['Identité visuelle', 'animation site web', "animation logo", 'poster pub', 'maquette site web']
      },
      skills: ['Figma', 'Ae', 'Pr', 'Ai', 'Id', 'Ps', 'Html', 'Css', 'Javascript', 'Webgl', 'Threejs', 'Vuejs'],
      noir: '#232121',
      blanc: '#F4F3EF',
      windowWidth: window.innerWidth,
    }
  },

  mounted() {
        window.addEventListener('resize', this.handleResize);
    },

    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    },

  components: {
    HeaderItem,
    TitreMael,
    ProjetItem,
    WrapItem,
    FooterItem
  }
}
</script>

<template>
  <div class="app">
    <HeaderItem/>
    <TitreMael class="titremael"/>
    <ProjetItem :url="'./src/assets/images/immersio_poster.jpg'" :nom="'immersio'" :contexte="'projet personnel'" :skills="projet1.skills" :details="projet1.details" :date="'décembre 2023'"/>
  </div>
  <div class="trait"></div>
  <div class="c-presentation">
    <div class="c-visu">
      <div class="title">
        <h3>Moi, Maël Aristide</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-right"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>    
      </div>
      <div class="image-moi">
      </div>
      <p class="end">©Maelaristide.com 2023</p>
    </div>
    <div class="c-desc">
      <p class="desc">Créateur junior dans le domaine du digital, je me perfectionne dans plusieurs domaines du web afin de proposer des solutions aux clients tout en ayant une approche à 360°</p>
      <p class="desc2">Ce que je peux vous proposer : Animations de type motion design, Maquettes UI, Développement No Code, Développement Front-end et Identités visuelles.</p>
      <WrapItem class="wrap-item" :skills="skills"/>  
    </div>
  </div>
 
  <div class="trait"></div>

  <div class="c-projets">
    <ProjetItem :url="'./src/assets/images/nuview_poster.jpg'" :nom="'nuview'" :contexte="'projet universitaire'" :skills="projet2.skills" :details="projet2.details" :date="'2023'"/>
    <ProjetItem :url="'./src/assets/images/yugetaway_poster.jpg'" :nom="'yugetaway'" :contexte="'projet freelance'" :skills="projet3.skills" :details="projet3.details" :date="'2023'"/>  
  </div>
  <span class="c-span-contact">
    <span class="span-contact">ENTRONS EN CONTACT </span><span class="span-contact">ENTRONS EN CONTACT </span><span class="span-contact">ENTRONS EN CONTACT </span><span class="span-contact">ENTRONS EN CONTACT </span>
  </span>

  <FooterItem class="footer" v-if="windowWidth<=690"/>
  <HeaderItem class="footer" v-if="windowWidth>690"/>

  </template>

<style scoped lang="scss">
.app {
  padding: 0 1rem;
}
.trait {
  height: 1px;
  background-color: var(--color-noir);
  margin-bottom: 70px;
}

.c-presentation {

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0 1rem;
  margin-bottom: 70px;

  .c-visu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 20px;

    

    .title {
      display: flex;
      align-items: flex-start;
      gap: 5px;
  
      h3 {
        color: v-bind(noir);
        font-family: 'Inter', sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      
    }
    
    .image-moi {
      height: 725px;
      width: 100%;
      background: url('./src/assets/images/moi.jpg');
      background-size: cover;
      background-position: center;
    }

  }

  .c-desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  p {
    
    color: v-bind(noir);
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &.end {
      align-self: flex-end;
      font-size: 1rem;
    }

    &.desc {
      margin-top: 60px;
    }

    &.desc2 {
      margin-top: 20px;
    }
  }
  
}

.c-projets {
  padding: 0 1rem;
}

.c-span-contact {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 50px;

  .span-contact {
    min-width: 800px;
    color: v-bind(noir);
    font-family: 'Inter', sans-serif;
    font-size: 4.375rem;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -.2rem;
  }
}

.footer {
  margin-bottom: 50px;
}




@media screen and (min-width: 690px) {
  .c-presentation {
    max-width: 680px;
    align-self: center;
    margin: 0 auto;

    .c-visu {
      max-width: 650px;
    }
  }
}

@media screen and (min-width: 1400px) {
  .c-presentation {
    max-width: 1250px;
    flex-direction: row;
    align-items: center;
    gap: 5vw;
    margin-bottom: 70px;

    .c-visu{
      .image-moi {
        background-position: 50% 20%;
        min-width: 650px;
      }
    } 

    .c-desc {
      max-width: 670px;
    }

  }
}
</style>
