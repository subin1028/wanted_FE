import axios from "axios";

export const getInfo = async () => {
    let info = await axios({
        method: "get",
        url: "http://localhost:5001/condition",
        headers:{
            "Content-Type": "application/json",
        },
    });
    return info;
};

const postInfo = async (data) => {
    try {
        const response = await axios({
            method: "post",
            url: "http://localhost:5001/condition",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        });
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        return null;
    }
};

export const updateData = async (id, newRate) => {
    const url = `http://localhost:5001/condition/${id}`;
    const data = {
        rate: newRate
    };

    axios.patch(url, data)
    .then(response => {

    })
    .catch(error => {
        console.error('There was a problem with your axios request:', error);
        // 에러 처리
    });
}

const createDataFromToday = (lastDate) => {
    let lastId = parseInt(lastDate.id);
    const today = new Date();
    const currentDate = new Date(lastDate.date);
    const newData = [];

    // 현재 날짜가 마지막 데이터의 날짜보다 이전인 경우에만 데이터 생성
    while (currentDate < today) {
        currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 이동
        const date = currentDate.toISOString().slice(0, 10); // yyyy-mm-dd 형태로 변환
        const newDataItem = { id: (lastId + 1).toString(), date: date, rate: 0 }; // 새로운 데이터 생성
        newData.push(newDataItem);
        lastId += 1;
    }
    return newData;
};

// 오늘까지 날짜 db에 추가
export const addDays = async () => {
    const info = await getInfo();
    const dataInfo = info.data
    const lastData = dataInfo[dataInfo.length -1]; // 마지막 날짜 가져오기

    if (lastData) {
        const todayData = createDataFromToday(lastData);
        await (todayData.map(async (item) => await postInfo(item)));

    } else {
        console.error("Failed");
    }
    return null;
};