const Home = () => {
    return (
        <main className="flex-1 py-12">
            <div className="container flex flex-col gap-6">
                <h2 className="font-semibold text-2xl">WIP</h2>
                <p className="m-0">Not much to look at for now, but I've made a start. In the unlikely event you've stumbled across this site,
                    basically, I'm rolling my own blog/cms site using React, TailwindCSS, MDX, and (hopefully) not much else.</p>
                <p className="m-0">Topics I will be writing posts will include:</p>
                <ul className="list-disc list-inside pl-2">
                    <li>Wordpress (psych! bet you thought it was going to be React)</li>
                    <li>Tailwind CSS</li>
                    <li>Node, NPM, esbuild, and a bit of Vite</li>
                    <li>React Native (when I can be bothered)</li>
                    <li>...and NOT React. Well maybe a little...</li>
                </ul>
                <p>This is (at most) a side project as my day job keeps me busy.
                    <a className="text-orange-700 underline" href="https://workhouse.au/" rel="nofollow">You can find me here</a>.</p>
            </div>
        </main>
    );
}

export default Home;