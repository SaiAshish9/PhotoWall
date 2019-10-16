this.state = {
    posts: [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
      }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://cdn.pixabay.com/photo/2018/03/29/11/41/mystery-3272046_1280.jpg"
      }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }]
}

removePhoto(postRemoved) {
    console.log(postRemoved.description)
    this.setState((state) => ({
        posts: state.posts.filter(post => post !== postRemoved )
    }))
}

addPhoto(postSubmitted) {
    this.setState(state => ({
        posts: state.posts.concat([postSubmitted])
    }))
}

this.removePhoto = this.removePhoto.bind(this)



    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }
