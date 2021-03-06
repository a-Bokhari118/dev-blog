import Head from 'next/head';
import Header from './Header';
import Search from './Search';
const Layout = ({ title, children, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favacon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Wlecome to DevBlog',
  keywords: 'development, coding, code, blog, programming',
  description: 'The Best place For Development and Programing',
};
