import type {NextPage} from 'next'
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";

const Home: NextPage = () => {
    return (
        <div>
            <Title title={""}
                   subtitle={
                       <span>
                           Com um pequeno valor mensal, você pode <strong>adotar um pet virtualmente</strong>
                       </span>
                   }/>
            <List
                pets={[
                    {
                        id: 1,
                        name: 'bidu',
                        history: 'asdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasd',
                        photo: 'https://img.r7.com/images/cachorro-que-parece-pompom-13012022171412951?dimensions=771x420',
                    },
                    {
                        id: 1,
                        name: 'Carlos',
                        history: 'asdasdasdasd asdasdasdasdasd asdasdasdasdasd asdasdasdasd',
                        photo: 'https://img.r7.com/images/cachorro-que-parece-pompom-13012022171412951?dimensions=771x420',
                    }
                ]}
            />
        </div>
    )
}

export default Home
