
import { Fragment } from "react";
import fs from 'fs/promises';
import path from 'path';

export default function ProductDetailPage(props){
	const {loadedProduct}=props;

	if(!loadedProduct){
		return <p>Loading...</p>
	}

	return (
		<Fragment>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</Fragment>
	);
}

export const getStaticProps = async(context)=>{
	const {params} = context;
	const productId = params.pid;

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
 	const jsonData =await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	const product = data.products.find(p => p.id===productId);

	return {
		props:{
			loadedProduct:product
		}
	}
}

export const getStaticPaths = async()=>{

	return {
		paths:[
			{params:{pid:'p1'}}
		],
		fallback:true // only pre-generate paths indicated above
	}

}
