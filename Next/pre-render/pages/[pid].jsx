
import { Fragment } from "react";
import fs from 'fs/promises';
import path from 'path';

export default function ProductDetailPage(props){
	const {loadedProduct}=props;

	return (
		<Fragment>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</Fragment>
	);
}

const getData=async()=>{
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
 	const jsonData =await fs.readFile(filePath);
	const data = JSON.parse(jsonData);
	return data;
}

export const getStaticProps = async(context)=>{
	const {params} = context;
	const productId = params.pid;

	const data =await getData();
	const product = data.products.find(p => p.id===productId);

	return {
		props:{
			loadedProduct:product
		}
	}
}

export const getStaticPaths = async()=>{

	const data=await getData();

	// collect ids in an array
	const ids=data.products.map(p => p.id);

	console.log('ids', ids);

	// select id matching with params id
	const pathWithParams=ids.map(id => ({params:{pid:id}}));

	console.log('pathWithParams', pathWithParams);

	return {
		paths:[
			{params:pathWithParams}
		],
		fallback:false
	}

}

