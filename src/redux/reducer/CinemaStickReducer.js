

const stateDefault = {
    danhSachGheDangDat: [
        // { soGhe: 'A1', gia: 1000 },
        // { soGhe: 'C1', gia: 1000 }

    ]
}


const CinemaStickReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_GHE": {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(ghedangdat => ghedangdat.soGhe === action.ghe.soGhe);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                danhSachGheUpdate.splice(index, 1)
            } else {   //khi người dùng click Ghế đang đặt chưa có trong mảng => push vào mảng
                danhSachGheUpdate.push(action.ghe)
            }
            // Cập nhật lại state để giao diện render lại
            state.danhSachGheDangDat = danhSachGheUpdate;
        }
        case "HUY_GHE": {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(ghedangdat => ghedangdat.soGhe === action.soGhe);
            if (index !== -1) { //khi người dùng click Ghế đang đặt đã có trong mảng => remove đi
                danhSachGheUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheUpdate;
            return { ...state }
        }
        default: return { ...state }
    }
}



export default CinemaStickReducer;