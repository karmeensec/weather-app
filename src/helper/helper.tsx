
// Convert a timestamp (in seconds) to a clock time format (HH:MM)

export const getSunTime = function(timeStamp: number) {

    const date = new Date(timeStamp * 1000);

    let hour = date.getHours().toString();
    let minute = date.getMinutes().toString();

    if (hour.length <= 1) {
        hour = `0${hour}`;
    }

    if (minute.length <= 1) {
        minute = `0${minute}`;
    }

    return `${hour} : ${minute}`;

}



export const getWindDirection = function(degree: number): string {

    if (degree > 15 && degree <= 75) return 'NE';

  if (degree > 76 && degree <= 105) return 'E';
  if (degree > 105 && degree <= 165) return 'SE;'

  if (degree > 166 && degree <= 195) return 'S';
  if (degree > 195 && degree <= 255) return 'SW';

  if (degree > 255 && degree <= 285) return 'W';
  if (degree > 285 && degree <= 345) return 'NW';

  return 'N';

}


export const getHumidity = function(hum: number): string {

    if (hum <= 55) return 'Dry, comfortable'
    if (hum > 55 && hum <= 65) return 'Uncomfortable, sticky feeling' 

  return 'Moisture, uncomfortable'

}


export const getPrecipitation = function(prep: number): string {

    if (prep <= 0.33) return 'Low probability'
    if (prep > 0.33 && prep <= 0.66) return 'Moderate probability'

    return 'High probability'

}


export const getPressure = function(pressure: number): string {

    if (pressure < 1013) return 'Lower';
    else return 'Higher';

}


export const getVisibility = function(visibility: number): string {

    if (visibility <= 50) return 'Dangerously foggy';
    if (visibility > 50 && visibility <= 500) return 'Expect heavy fog';
    if (visibility > 500 && visibility <= 2000) return 'Expect light fog';
    if (visibility > 2000 && visibility <= 9000) return 'Expect light haze';

  return 'Very clear';

}