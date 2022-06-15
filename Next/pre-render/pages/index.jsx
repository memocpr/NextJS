import Link from 'next/link';

import fs from 'fs/promises';
import path from 'path';

export default function Home(props) {
	const {products}=props;
  return (
		<ul>
			{products.map(p=>(
				<li key={p.id}><Link href={`/${p.id}`}>{p.title}</Link></li>
			))}
		</ul>
	)
}

export const getStaticProps=async(context)=>{
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
 	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	if(!data){
		return {
			redirect : {
				destination: '/no-data'
			}
		}
	}

	if(data.products.length === 0 ){
		return { notFound:true};
	}

	return {props: {
		products:data.products
		},
		revalidate:10 // regenerate in every 10s at production
	}
};

