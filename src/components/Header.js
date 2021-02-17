export default function Header(props) {
    return (
        <header className={'row block center'}>
            <div>
                <a href={'#/'}>
                    <img className={'logo'}
                         src={'https://www.johner-institut.de/fileadmin/bilder/logo.png'}
                         alt={'Johner Institut Logo'}></img>
                </a>
            </div>
            <div>
                <a href={'#/warenkorb'}>Warenkorb</a> <a href={'#/login'}>Login</a>
            </div>
        </header>
    );
}