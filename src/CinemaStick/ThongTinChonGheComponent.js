import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/CinemaStickAction'
class ThongTinChonGheComponent extends Component {
    render() {
        return (
            <div>
                <div>
                    <button className='gheDuocChon mt-4'></button><span className='text-light ml-2 display-7'>Ghế đã chọn</span>
                    <br></br><button className='gheDangChon mt-1'></button><span className='text-light ml-2 display-7'>Ghế đang chọn</span>
                    <br></br><button className='ghe mt-1 ml-0'></button><span className='text-light ml-2 display-7'>Ghế trống</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border='2'>
                        <thead>
                            <tr className='text-light' style={{ fontSize: '20px' }}>
                                <th >Số ghế</th>
                                <th >Giá vé</th>
                                <th >Hủy</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((dangDat, index) => {
                                return <tr key={index}>
                                    <td>{dangDat.soGhe}</td>
                                    <td>{dangDat.gia.toLocaleString()}</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        this.props.dispatch(huyGheAction(dangDat.soGhe))
                                    }}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td className='text-warning'>Tổng tiền:</td>
                                <td className='text-warning'>
                                    {
                                        this.props.danhSachGheDangDat.reduce((tT, ge, index) => {
                                            return tT += ge.gia
                                        }, 0).toLocaleString()
                                    }
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToPorps = state => {
    return {
        danhSachGheDangDat: state.CinemaStickReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToPorps, null)(ThongTinChonGheComponent)