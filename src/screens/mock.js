class Content{
    static all()
    {
        return fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
             return response.json()
        })
    }
}

export default Content;