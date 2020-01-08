import Vue from 'vue'
import VueRouter from 'vue-router'
import Affirmpwd from '../views/affirmpwd.vue'
import AnalyzeCs from '../views/analyzeCs.vue'
import Analyze from '../views/analyze.vue'
import ImgLive from '../views/imgLive.vue'
import LeagueDetails from '../views/leagueDetails.vue'
import LiveData from '../views/liveData.vue'
import MaCenter from '../views/maCenter.vue'
import ParticularsTeam from '../views/particularsTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/affirmpwd',
    name:'affirmpwd',
    component:Affirmpwd
  },
  {
    path:'/analyzeCs',
    name:'analyzeCs',
    component:AnalyzeCs
  },
  {
    path:'/analyze',
    name:'analyze',
    component:Analyze
  },
  {
    path:'/imgLive',
    name:'imgLive',
    component:ImgLive
  },
  {
    path:'/leagueDetails',
    name:'leagueDetails',
    component:LeagueDetails
  },
  {
    path:'/liveData',
    name:'liveData',
    component:LiveData
  },
  {
    path:'/maCenter',
    name:'maCenter',
    component:MaCenter
  },
  {
    path:'/particularsTeam',
    name:'particularsTeam',
    component:ParticularsTeam
  }
]

const router = new VueRouter({
  routes
})

export default router
