import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <img className="header__logo-icon" width={40} height={40} src="/icons/logo.svg" alt="Logo" />
                        <p className="header__logo-name">REACT SNEAKERS</p>
                        <p className="header__logo-subtitle">Магазин лучших кроссовок</p>
                    </div>
                    <div className="header__actions">
                        <button className="header__action header__action_cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                <path
                                    fill="#9B9B9B"
                                    d="M7.5 19.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm0-2c-.1 0-.2.1-.2.2 0 .2.4.2.4 0 0-.1-.1-.2-.2-.2zM16.5 19.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm0-2c-.1 0-.2.1-.2.2 0 .2.4.2.4 0 0-.1-.1-.2-.2-.2zM8.1 14.3c-.6 0-1.2-.2-1.6-.6-.5-.4-.8-.9-.9-1.5L4.1 5.3s0-.1 0-.1L3.5 2H1C.4 2 0 1.6 0 1s.4-1 1-1h3.3c.5 0 .9.3 1 .8l.7 3.3H19c.3 0 .6.1.8.4.2.2.2.5.2.8l-1.3 6.9c-.1.6-.5 1.2-.9 1.5-.5.4-1.1.6-1.7.6H8.1zM6.3 6.1l1.1 5.7c0 .1.1.3.2.4.1.1.3.1.4.1h8c.1 0 .3 0 .4-.1.1-.1.2-.2.2-.4l1.1-5.7H6.3z"
                                />
                            </svg>
                            <span>1205 грн.</span>
                        </button>
                        <button className="header__action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path
                                    d="M12.9537 0C14.3511 0 15.5249 0.47123 16.4751 1.41369C17.4253 2.35615 17.9004 3.5065 17.9004 4.86475C17.9004 5.53002 17.7607 6.20221 17.4812 6.88134C17.2017 7.56047 16.8943 8.16336 16.5589 8.69003C16.2235 9.2167 15.6576 9.89582 14.8611 10.7274C14.0646 11.559 13.3939 12.2312 12.8489 12.744C12.3039 13.2568 11.4305 14.0399 10.2288 15.0932L8.92924 16.2574L7.62968 15.1348C6.45588 14.0537 5.58951 13.2568 5.03056 12.744C4.4716 12.2312 3.79388 11.559 2.99737 10.7274C2.20087 9.89582 1.63493 9.2167 1.29956 8.69003C0.96419 8.16336 0.663754 7.56047 0.398252 6.88134C0.132751 6.20221 0 5.53002 0 4.86475C0 3.5065 0.475108 2.35615 1.42532 1.41369C2.37554 0.47123 3.53536 0 4.90479 0C6.52575 0 7.86723 0.623686 8.92924 1.87106C9.99124 0.623686 11.3327 0 12.9537 0ZM9.01308 13.8043C10.3825 12.5846 11.3816 11.6768 12.0105 11.0808C12.6393 10.4849 13.331 9.77109 14.0856 8.93951C14.8401 8.10792 15.3642 7.38029 15.6576 6.7566C15.9511 6.13292 16.0978 5.5023 16.0978 4.86475C16.0978 3.97773 15.7973 3.24317 15.1965 2.66106C14.5956 2.07895 13.848 1.7879 12.9537 1.7879C12.2829 1.7879 11.6471 1.98194 11.0463 2.37001C10.4454 2.75808 10.0192 3.25703 9.76766 3.86686H8.09081C7.86723 3.25703 7.455 2.75808 6.85413 2.37001C6.25326 1.98194 5.60348 1.7879 4.90479 1.7879C4.01047 1.7879 3.26986 2.07895 2.68296 2.66106C2.09606 3.24317 1.80262 3.97773 1.80262 4.86475C1.80262 5.5023 1.94235 6.13292 2.22183 6.7566C2.5013 7.38029 3.02532 8.10792 3.79388 8.93951C4.56243 9.77109 5.26112 10.4849 5.88994 11.0808C6.51876 11.6768 7.50391 12.5846 8.84539 13.8043L8.92924 13.8874L9.01308 13.8043Z"
                                    fill="#9B9B9B"
                                />
                            </svg>
                            <span>Закладки</span>
                        </button>
                        <button className="header__action">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 9C0 4.1211 4.1211 0 9 0C13.8789 0 18 4.1211 18 9C18 11.871 16.5672 14.4702 14.4 16.1316V16.2H14.3082C12.807 17.3205 10.9683 18 9 18C7.0317 18 5.193 17.3205 3.6918 16.2H3.6V16.1316C1.4328 14.4702 0 11.8701 0 9ZM6.41112 13.7124C5.93239 14.0975 5.59923 14.6344 5.4666 15.2343C6.5178 15.8436 7.7256 16.2 9 16.2C10.2744 16.2 11.4822 15.8436 12.5334 15.2343C12.4006 14.6344 12.0674 14.0977 11.5887 13.7126C11.11 13.3275 10.5144 13.1169 9.9 13.1157H8.1C7.48557 13.1168 6.88986 13.3272 6.41112 13.7124ZM12.391 12.0705C13.129 12.5617 13.7057 13.2596 14.049 14.0769C15.3693 12.7638 16.2 10.9584 16.2 9C16.2 5.0967 12.9033 1.8 9 1.8C5.0967 1.8 1.8 5.0967 1.8 9C1.8 10.9584 2.6307 12.7638 3.951 14.0769C4.2943 13.2596 4.87104 12.5617 5.60904 12.0705C6.34704 11.5794 7.21351 11.3168 8.1 11.3157H9.9C10.7865 11.3168 11.653 11.5794 12.391 12.0705ZM5.40001 7.2C5.40001 5.148 6.94801 3.6 9.00001 3.6C11.052 3.6 12.6 5.148 12.6 7.2C12.6 9.252 11.052 10.8 9.00001 10.8C6.94801 10.8 5.40001 9.252 5.40001 7.2ZM7.20001 7.2C7.20001 8.2602 7.93981 9 9.00001 9C10.0602 9 10.8 8.2602 10.8 7.2C10.8 6.1398 10.0602 5.4 9.00001 5.4C7.93981 5.4 7.20001 6.1398 7.20001 7.2Z"
                                    fill="#9B9B9B"
                                />
                            </svg>
                            <span>Профиль</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
