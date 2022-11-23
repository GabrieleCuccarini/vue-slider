const { createApp } = Vue;

createApp({
    data () {
      return {
        currentIndex: 0,
        movie: {
            images: [
            'img/01.webp',
            'img/02.webp',
            'img/03.webp',
            'img/04.webp',
            'img/05.webp'
            ],
            title: [
            'Marvel\'s Spiderman Miles Morale',
            'Ratchet & Clank: Rift Apart',
            'Fortnite',
            'Stray',
            "Marvel's Avengers"
            ],
            text: [
            'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',       
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",    
            'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            ]
        },
        autoplay: ""
    }
},
    methods: {
        clickPrev () {
          if (this.currentIndex === 0) {
            this.currentIndex = (this.movie.images.length - 1);
          } else {
            this.currentIndex--;
          }
        },
        clickNext () {
          if (this.currentIndex === this.movie.images.length - 1) {
            this.currentIndex = 0;
          } else {
            this.currentIndex++;
          }
        },
        //BONUS 1
        onThumbClick (clickedImageIndex) {
          this.currentIndex = clickedImageIndex;
        },
        //BONUS 2
        startPlay () {
        this.autoplay = setInterval(this.clickNext, 3000)
        },
        stopPlay () {
          this.autoplay = clearInterval()
          },
    }
  }).mount("#app")