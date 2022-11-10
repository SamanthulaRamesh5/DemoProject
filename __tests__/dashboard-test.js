import React from 'react';
import DashBoard from '../app/screens/dashboard';
import renderer from 'react-test-renderer';
import Content from '../app/screens/mock';
 const mockedNavigate = jest.fn();

 jest.mock('@react-navigation/native', () => {
   const actualNav = jest.requireActual('@react-navigation/native');
   return {
     ...actualNav,
     useNavigation: () => ({
       navigate: mockedNavigate,
     }),
   };
 });

 const data=[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
]


 test('Api test',async  ()=>{

    global.fetch = jest.fn().mockImplementation(()=>{
        var p =new Promise((resolve, reject)=>{
            resolve({
                json: function(){
                    return data
                }
            })
        })
        return p;
    })
    const response = await Content.all();
    console.log(response)
    expect(response).toBe(data)
 })
 test('renders correctly', () => {
    const tree = renderer.create(<DashBoard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
 