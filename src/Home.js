import React, { Component } from 'react'


const API = 'http://localhost:3000/gather_reviews'

export class Home extends Component {

    state = {

        reviews: null,
        done: false 

    }

    fetchReviews = () => {
        console.log('HITTING FETCH')
        fetch(`${API}/${605830}`)
        .then((data) => data.json())
        .then((reviews) => this.setState({reviews: reviews}))
        .then(() => this.setState({done: true }))

    }

   


    

    componentDidMount(){
        this.fetchReviews()
    }

    

    



    displayReviews = () => {
        let i = 0
        let length = this.state.reviews.length
        console.log("THE ARRAY:", this.state.reviews)
        while(i < length){
            i++
           return this.state.reviews[i].table.reviews.map((review) => (
    
           <li> {review.table.review} </li>

           ))
            
        
        }
        
        
        
    }


    render() {
        return (
            <div id='mainDiv'>
                <h3>-----------------------------------------------------</h3>
                <ol>
                {this.state.done === true ? this.displayReviews() : <p>Loading...</p>}
                </ol>
            </div>
        )
    }
}

export default Home
