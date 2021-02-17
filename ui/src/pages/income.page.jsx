import React from 'react';
import './income.page.css';
import boy from './IncomePageImg/icon-boy.png';
import girl from './IncomePageImg/icon-girl.png';

export function IncomePage() {
  return (
    <>
      <div className="container-xxl container__income-page">
        <ul className="income__list">
          <li>
            <div className="main__container">
              <div className="container__user">
                <div className="container_card">
                  <div className="user__card card">
                    <img src={boy} className="card-img-top" alt="icon-boy" />
                    <div className="card-body">
                      <h4 className="user__title card-title">Vadik</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container__money-earned">
                <div className="money-earned">
                  <h4>Money earned:</h4>
                </div>
                <div className="money-value">
                  <h4>200$</h4>
                </div>
              </div>

              <div className="container__add-money">
                <div className="add-money">
                  <button type="button" className="btn btn-primary">
                    Add money
                  </button>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">$</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="main__container">
              <div className="container__user">
                <div className="container_card">
                  <div className="user__card card">
                    <img src={girl} className="card-img-top" alt="icon-girl" />
                    <div className="card-body">
                      <h4 className="user__title card-title">Ira</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container__money-earned">
                <div className="money-earned">
                  <h4>Money earned:</h4>
                </div>
                <div className="money-value">
                  <h4>3000$</h4>
                </div>
              </div>

              <div className="container__add-money">
                <div className="add-money">
                  <button type="button" className="btn btn-primary">
                    Add money
                  </button>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">$</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="container__add">
              <button type="button" className="btn btn-primary">
                Add user
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
