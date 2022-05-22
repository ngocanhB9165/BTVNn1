var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var conNguoi = /** @class */ (function () {
    function conNguoi(ten, tuoi, gioiTinh, diaChi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }
    conNguoi.prototype.gt = function () {
        if (this.gioiTinh == 1) {
            return "Nam";
        }
        else if (this.gioiTinh) {
            return "Nu";
        }
        else {
            return "Gioi tinh thu 3";
        }
    };
    conNguoi.prototype.hienThiThongTin = function () {
        var tbody = document.getElementById('tbody');
        tbody.innerHTML +=
            "<tr>\n            <td>".concat(this.ten, "</td>\n            <td>").concat(this.tuoi, "</td>\n            <td>").concat(this.gt(), "</td>\n            <td>").concat(this.diaChi, "</td>\n        </tr>");
    };
    return conNguoi;
}());
var conNguoi1 = new conNguoi('DOA', 18, 2, 'Ha Noi');
conNguoi1.hienThiThongTin();
var conNguoi2 = new conNguoi('DOB', 18, 1, 'Sài Gòn');
conNguoi2.hienThiThongTin();
var conNguoi3 = new conNguoi('DOC', 16, 3, 'Ha Noi');
conNguoi3.hienThiThongTin();
var sinhVien = /** @class */ (function (_super) {
    __extends(sinhVien, _super);
    function sinhVien(ten, tuoi, gioiTinh, diaChi, msv, diemToan, diemLy, diemHoa) {
        var _this = _super.call(this, ten, tuoi, gioiTinh, diaChi) || this;
        _this.msv = msv;
        _this.diemToan = diemToan;
        _this.diemLy = diemLy;
        _this.diemHoa = diemHoa;
        return _this;
    }
    sinhVien.prototype.diemTB = function () {
        return ((this.diemToan + this.diemLy + this.diemHoa) / 3);
    };
    ;
    sinhVien.prototype.checkDiemTB = function () {
        var xepLoai = this.diemTB();
        if (xepLoai < 5) {
            return 'Kem';
        }
        else if (xepLoai >= 5 && xepLoai < 8) {
            return 'Kha';
        }
        else {
            return 'Gioi';
        }
    };
    sinhVien.prototype.showSinhVien = function () {
        var tbody_sv = document.getElementById("tbody-sv");
        tbody_sv.innerHTML += "\n            <tr>\n                <td>".concat(this.msv, "</td>\n                <td>").concat(this.ten, "</td>\n                <td>").concat(this.tuoi, "</td>\n                <td>").concat(this.gt(), "</td>\n                <td>").concat(this.diaChi, "</td>\n                <td>").concat(this.diemToan, "</td>\n                <td>").concat(this.diemLy, "</td>\n                <td>").concat(this.diemHoa, "</td>\n                <td>").concat(this.diemTB().toFixed(2), "</td>\n                <td>").concat(this.checkDiemTB(), "</td>\n            </tr>\n        ");
    };
    return sinhVien;
}(conNguoi));
var sinhvien1 = new sinhVien('DOA', 18, 2, 'Ha Noi', 'B9165', 9, 8, 9);
sinhvien1.showSinhVien();
var sinhvien2 = new sinhVien('DOB', 18, 2, 'Ha Noi', 'B9166', 7, 9, 6);
sinhvien2.showSinhVien();
var sinhvien3 = new sinhVien('DOC', 19, 2, 'Ha Noi', 'B9167', 5, 8, 4);
sinhvien3.showSinhVien();
var nhanVien = /** @class */ (function (_super) {
    __extends(nhanVien, _super);
    function nhanVien(ten, tuoi, gioiTinh, diaChi, mnv, luongCB, soNgayCong) {
        var _this = _super.call(this, ten, tuoi, gioiTinh, diaChi) || this;
        _super.prototype.gt.call(_this);
        _this.mnv = mnv;
        _this.luongCB = luongCB;
        _this.soNgayCong = soNgayCong;
        return _this;
    }
    nhanVien.prototype.tinhLuong = function () {
        return this.luongCB * this.soNgayCong;
    };
    nhanVien.prototype.checkLuong = function () {
        var tongLuong = this.tinhLuong();
        if (tongLuong <= 5000000) {
            return "Nhan vien moi";
        }
        else if (tongLuong > 5000000 && tongLuong < 10000000) {
            return "Nhan vien chinh thuc";
        }
        else {
            return "Nhan vien lau nam";
        }
    };
    nhanVien.prototype.showNhanVien = function () {
        var tbody_gv = document.getElementById("tbody-gv");
        tbody_gv.innerHTML += "\n            <tr>\n                <td>".concat(this.mnv, "</td>\n                <td>").concat(this.ten, "</td>\n                <td>").concat(this.tuoi, "</td>\n                <td>").concat(this.gt(), "</td>\n                <td>").concat(this.diaChi, "</td>\n                <td>").concat(this.soNgayCong, "</td>\n                <td>").concat(this.luongCB, "</td>\n                <td>").concat(this.tinhLuong(), "</td>\n                <td>").concat(this.checkLuong(), "</td>\n            </tr>\n        ");
    };
    return nhanVien;
}(conNguoi));
var nhanVien1 = new nhanVien('DOA', 18, 2, 'Ha Noi', 'B9165', 600000, 20);
nhanVien1.showNhanVien();
var nhanVien2 = new nhanVien('DOB', 19, 1, 'Ha Noi', 'B9166', 8000000, 30);
nhanVien2.showNhanVien();
