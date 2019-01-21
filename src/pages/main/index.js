import React, {Component} from 'react';
import './styles.css';
import api from '../../services/api';

export default class Main extends Component{
    state = {
        products: [],
        pages: 0,
    };
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');
        
        this.setState({products: response.data.docs});
        this.setState({pages: response.data.docs.pages});
    };

    render(){
        const {products} = this.state;

        return (
            <div className='product-list'>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}