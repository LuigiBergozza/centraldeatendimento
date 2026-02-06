import { useState, useEffect } from 'react';
import { MapPinCheckInside } from "lucide-react";

export const LocalizacaoUsuario = () => {
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
          const estado = data.address.state;
          const pais = data.address.country;
          const enderecoCompleto = `${estado}, ${pais}`;
          setEndereco(enderecoCompleto);
        })
        .catch(error => console.error(error));
    });
  }, []);


  return (
    <p className="text-[#7495ab] gap-1 items-center text-sm flex font-semibold">
        <MapPinCheckInside className="text-[#7495ab] text-xs" />
      {endereco}
    </p>
  );
};