export class DatabaseMemory{
    #videos = []

    list(video){
        const videoId = randomUUID()
        this.#videos.set(videoId, video)

    }

    create (video){
        const videoId = randomUUID()
        this.#videos.set(videoId, video)
        
    }



    update (id, video ){

       this.#videos.set(id, video )
    }

    delete (id){

        this.#videos.set(id )
     }
}