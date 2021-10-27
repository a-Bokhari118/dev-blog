import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center mt-6 2xl:mt-18 p-4">
        <Image src="/images/not.svg" alt="404 logo" width={600} height={600} />
        <h1 className="text-4xl md:text-6xl my-5">Whoops!</h1>
        <h2 className="text-2xl md:text-4xl text-gray-400 mb-5">
          This Page Does Not Exist
        </h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
