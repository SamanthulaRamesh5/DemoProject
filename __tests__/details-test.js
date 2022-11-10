/**
 * @format
 */

 import 'react-native';
 import React from 'react';
import DetailesScreen from '../app/screens/details';
 import renderer from 'react-test-renderer';
 

describe(' tests', () => {
    it('Render the component correctly ', () => {
    
        const route = {
            params:{        
               data:{"body": "est rerum tempore vitae", "id": 2, "title": "qui est esse", "userId": 1}
            }
        }
        const navigate = jest.fn();
        const tree = renderer.create(<DetailesScreen route= {route} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });