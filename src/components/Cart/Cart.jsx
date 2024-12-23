import "./Cart.scss";

const Cart = () => {
    return (
        <div className="cart">
            <h2 className="cart__title">Корзина</h2>
            <div className="cart__items">
                <div className="cart__item">
                    <img className="cart__item-img" width={70} height={70} src="/img/Cart01.jpg" alt="" />
                    <p className="cart__item-title">Мужские Кроссовки Nike Air Max 270</p>
                    <p className="cart__item-price">12 999 руб.</p>
                    <button className="cart__item-btn">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                fill="#D3D3D3"
                            />
                        </svg>
                    </button>
                </div>
                <div className="cart__item">
                    <img className="cart__item-img" width={70} height={70} src="/img/Cart01.jpg" alt="" />
                    <p className="cart__item-title">Мужские Кроссовки Nike Air Max 270</p>
                    <p className="cart__item-price">12 999 руб.</p>
                    <button className="cart__item-btn">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                fill="#D3D3D3"
                            />
                        </svg>
                    </button>
                </div>
                <div className="cart__item">
                    <img className="cart__item-img" width={70} height={70} src="/img/Cart01.jpg" alt="" />
                    <p className="cart__item-title">Мужские Кроссовки Nike Air Max 270</p>
                    <p className="cart__item-price">12 999 руб.</p>
                    <button className="cart__item-btn">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                fill="#D3D3D3"
                            />
                        </svg>
                    </button>
                </div>
                <div className="cart__item">
                    <img className="cart__item-img" width={70} height={70} src="/img/Cart01.jpg" alt="" />
                    <p className="cart__item-title">Мужские Кроссовки Nike Air Max 270</p>
                    <p className="cart__item-price">12 999 руб.</p>
                    <button className="cart__item-btn">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                fill="#D3D3D3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="cart__info">
                <div className="cart__sum">
                    <span className="cart__sum-text">Итого: </span>
                    <div className="cart__info-dash"></div>
                    <span className="cart__sum-value">21 498 руб. </span>
                </div>
                <div className="cart__taxes">
                    <span className="cart__taxes-text">Налог 5%: </span>
                    <div className="cart__info-dash"></div>
                    <span className="cart__taxes-value">1074 руб. </span>
                </div>
                <a href="#!" className="cart__btn">
                    Оформить заказ
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Cart;
