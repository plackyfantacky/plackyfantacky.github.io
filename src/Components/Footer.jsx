const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="p-4 flex flex-row items-center justify-center bg-grey">
            <p className="text-white m-0">Content and my logo are &copy; 2014 - {year} Adam Trickett.</p>
        </footer>
    );
}
export default Footer;