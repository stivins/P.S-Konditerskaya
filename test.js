const App={
    data(){
        return{
            first_six:[
                {body:'', price:'cake' , img: 'assets/img/cake1.png',},
                {body:'', price:'bento' , img: 'assets/img/bento1.png',},
                {body:'', price:'cake' , img: 'assets/img/cake2.png',},
                {body:'', price:'cake' , img: 'assets/img/cake3.png',},
                {body:'', price:'bento' , img: 'assets/img/bento2.png',},
                {body:'', price:'cake' , img: 'assets/img/cake4.png',},
                {body:'', price:'cake' , img: 'assets/img/cake5.png',},
                {body:'', price:'cake' , img: 'assets/img/cake6.png',},
                {body:'', price:'bento' , img: 'assets/img/bento3.png',},
                {body:'', price:'cake' , img: 'assets/img/cake7.png',},
            ],
            arrayTovarov: [
                {body:'', price:'cake' , img: 'assets/img/cake8.png',},
                {body:'', price:'wedding' , img: 'assets/img/wedding1.png',},
                {body:'', price:'bento' , img: 'assets/img/bento4.png',},
                {body:'', price:'cake' , img: 'assets/img/cake9.png',},
                {body:'', price:'bento' , img: 'assets/img/bento5.png',},

                {body:'', price:'cake' , img: 'assets/img/cake10.png',},
                {body:'', price:'bento' , img: 'assets/img/bento6.png',},
                {body:'', price:'wedding' , img: 'assets/img/wedding2.png',},
                {body:'', price:'bento' , img: 'assets/img/bento7.png',},
                {body:'', price:'bento' , img: 'assets/img/bento8.png',},
                
                {body:'', price:'bento' , img: 'assets/img/bento9.png',},
                {body:'', price:'cake' , img: 'assets/img/cake11.png',},
                {body:'', price:'cake', img: 'assets/img/cake12.png',},
                {body:'', price:'bento' , img: 'assets/img/bento10.png',},
                {body:'', price:'cake' , img: 'assets/img/cake13.png',},

                {body:'', price:'wedding' , img: 'assets/img/wedding3.png',},
                {body:'', price:'cake' , img: 'assets/img/cake14.png',},
                {body:'', price:'bento' , img: 'assets/img/bento11.png',},
                {body:'', price:'wedding', img: 'assets/img/wedding4.png',},
                {body:'', price:'bento' , img: 'assets/img/bento12.png',},

                {body:'', price:'bento' , img: 'assets/img/bento13.png',},
                {body:'', price:'cake' , img: 'assets/img/cake15.png',},
                {body:'', price:'wedding', img: 'assets/img/wedding5.png',},
                {body:'', price:'wedding' , img: 'assets/img/wedding6.png',},
                {body:'', price:'cake' , img: 'assets/img/cake16.png',},

                {body:'', price:'cake' , img: 'assets/img/cake17.png',},
                {body:'', price:'wedding' , img: 'assets/img/wedding7.png',},
            ],
            selectOption:'',
            sortOption:[
                {value: '1', name:'бенто-торты'},
                {value: '2', name:'торты'},
                {value: '3', name:'свадебные торты'},
                {value: '4', name:'все дизайны'},
            ],
            openAll:false,
            searchValue:'',

        }
    },
    methods:{
        showCards(){
            for (let i=0;i<this.arrayTovarov.length;i++){
                this.first_six.push(this.arrayTovarov[i])
            }
            this.openAll=true
        },

    },
    computed:{
        sortCards(){
                if (this.selectOption === '1') {
                    if (this.first_six.length>10){
                        let new_arr=[]
                        new_arr=[...this.first_six]
                        this.openAll=true
                        for(let j=0;j<new_arr.length;j++){
                            if (new_arr[j].price=='cake' || new_arr[j].price=='wedding'){
                                new_arr.splice(j,1)
                                j=0

                            }
                        }
                        return new_arr
                    }
                    else{
                        let new_arr=[]
                        new_arr=[...this.first_six]
                        this.openAll=true
                        for (let i=0;i<this.arrayTovarov.length;i++){
                            new_arr.push(this.arrayTovarov[i])
                        }
                        for(let j=0;j<new_arr.length;j++){
                            if (new_arr[j].price=='cake' || new_arr[j].price=='wedding'){
                                new_arr.splice(j,1)
                                j=0

                            }
                        }
                        return new_arr
                    }


                }
                if (this.selectOption === '2') {
                    if (this.first_six.length>10){
                        let new_arr=[]
                        new_arr=[...this.first_six]
                        this.openAll=true
                        for(let j=0;j<new_arr.length;j++){
                            if (new_arr[j].price=='bento' || new_arr[j].price=='wedding'){
                                new_arr.splice(j,1)
                                j=0

                            }
                        }
                        return new_arr
                    }
                    else{
                        let new_arr=[]
                        new_arr=[...this.first_six]
                        this.openAll=true
                        for (let i=0;i<this.arrayTovarov.length;i++){
                            new_arr.push(this.arrayTovarov[i])
                        }
                        for(let j=0;j<new_arr.length;j++){
                            if (new_arr[j].price=='bento' || new_arr[j].price=='wedding'){
                                new_arr.splice(j,1)
                                j=0

                            }
                        }
                        return new_arr
                    }

                }
                if (this.selectOption === '3') {
                    if (this.first_six.length>10){
                        let new_arr=[]
                        new_arr=[...this.first_six]
                        this.openAll=true
                        for(let j=0;j<new_arr.length;j++){
                            if (new_arr[j].price=='cake' || new_arr[j].price=='bento'){
                                new_arr.splice(j,1)
                                j=0
                            }
                        }
                        return new_arr
                    }
                    else{
                        let new_arr=[]
                        new_arr=[...this.first_six]
                        this.openAll=true
                        for (let i=0;i<this.arrayTovarov.length;i++){
                            new_arr.push(this.arrayTovarov[i])

                        }
                        new_arr.splice(1,1)
                        for(let j=0;j<new_arr.length;j++){
                            if (new_arr[j].price=='cake' || new_arr[j].price=='bento'){
                                new_arr.splice(j,1)
                                j=0
                            }
                        }
                        return new_arr
                    }

                }
                if(this.selectOption===''|| this.selectOption==='4') {
                    return this.first_six
                }
        },
        sortedAndSearchCards(){
            return this.sortCards.filter(p=>p.body.toUpperCase().indexOf(this.searchValue.toUpperCase()) !== -1)
        },
    }
}
const app1 = Vue.createApp(App)
app1.mount('#app')