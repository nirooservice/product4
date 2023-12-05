import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import flagIconUrl from '../images/flag.png';
import pumpShopImageUrl from '../images/pump-shop-image.jpg';

const Contact = () => {
  useEffect(() => {
    const map = L.map('map').setView([36.31145761597784, 59.577332611882674], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const flagIcon = new L.Icon({
      iconUrl: flagIconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    L.marker([36.31145761597784, 59.577332611882674], { icon: flagIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center;">
          <b style="font-family: 'Iran Sans', sans-serif;">پمپ آب حق وردی</b>
          <p style="margin-top: 10px;">تلفن: ۰۹۱۲۳۴۵۶۷۸۹</p>
          <div style="margin-top: 10px;">
            <img src="${pumpShopImageUrl}" alt="Pump Shop Image" style="max-width: 100%; height: auto;">
          </div>
        </div>
      `)
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ textAlign: 'right', paddingRight: '20px' }}>
      <h2 style={{ fontFamily: 'Iran Sans, sans-serif', fontWeight: 'bold' }}>تماس با ما</h2>
      <div id="map" style={{ height: '700px' }}></div>
    </div>
  );
};

export default Contact;
