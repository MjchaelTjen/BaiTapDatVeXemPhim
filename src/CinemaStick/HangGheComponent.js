import React, { Component } from 'react'

import { connect } from 'react-redux'
import { datGheAction } from '../redux/actions/CinemaStickAction';
class HangGheComponent extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            let disable = false;
            // Trạng thái ghế đã bị người khác đặt rồi
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }

            // Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disable} key={index} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} >
                {ghe.soGhe}
            </button>

        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            return <button className='rowNumber'>
                {ghe.soGhe}
            </button>
        })

    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-3'>
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang}{this.renderGhe()}
            </div>
        }

    }

    render() {
        // let { hangGhe } = this.props
        return (

            <div className='text-light text-left mt-3 ml-3' style={{ fontSize: '25px' }}> {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.CinemaStickReducer.danhSachGheDangDat
    }
}

const mapDispatchToPops = dispatch => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToPops)(HangGheComponent)