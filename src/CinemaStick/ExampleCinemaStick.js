import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinChonGheComponent from './ThongTinChonGheComponent'
import DanhSachHangGhe from '../Data/danhSachGhe.json'
import HangGheComponent from './HangGheComponent'
export default class ExampleCinemaStick extends Component {

    renderHangGhe = () => {
        return DanhSachHangGhe.map((hangGhe, index) => {
            return <div key={index}>
                <HangGheComponent hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }


    render() {
        return (
            <div className='Cinema-font' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='text-warning' style={{ fontSize: '35px' }}>BAI TAP DAT VE XEM PHIM</div>
                                <div className='text-light' style={{ fontSize: '20px' }}>Màn hình</div>
                                <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div className="screen"></div>


                                </div>
                                <div>
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className='col-4 text-left'>
                                <div className='text-light mt-5' style={{ fontSize: '30px' }}>Danh sách ghế chọn</div>
                                <ThongTinChonGheComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
