
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