import Logo from '@components/Logo';


const Header = () => {
    return (
        <header className="flex flex-row items-center p-8 gap-4 bg-ariom">
            <Logo className="inline-block h-12" aLink="/" aClass="max-w-12" />
            <h1 className="font-sans font-normal text-3xl flex flex-row gap-2 items-center"><a href="/">Static Nerd</a> 
                <span className="text-sm flex flex-row gap-2 items-center">by 
                    <a className="text-lg" href="https://github.com/plackyfantacky/">@plackyfantacky</a>
                </span>
            </h1>
        </header>
    )
}
export default Header;