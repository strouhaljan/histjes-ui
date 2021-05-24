
import proj4 from 'proj4';

const EPSG_5514 = 'EPSG:5514';

proj4.defs(EPSG_5514,"+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813975277778 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=498.17,136.89,510.08,6.007,4.343,3.831,3.38 +units=m +no_defs");

export function toWgs84(coord, decimalDigits) {
    let coord2 = proj4(EPSG_5514).inverse(coord);
    if (decimalDigits) {
        coord2[0] = coord2[0].toFixed(decimalDigits);
        coord2[1] = coord2[1].toFixed(decimalDigits);
    }
    return coord2;
}

export function fromWgs84(coord) {
    return proj4(EPSG_5514).forward(coord);
}
