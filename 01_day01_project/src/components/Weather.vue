<template>
  <div id="maindiv">
    <h2>{{ message }}</h2>
    <h3>当前您所在位置：{{ city }}</h3>
    <h3>气温：{{ temperature }}</h3>
    <h3>天气：{{ weather }}</h3>
    <h3 class="time">发布时间: {{ time }}</h3>
    <button @click="getWeather">获取天气</button>
    <button @click="getIp">获取当前IP</button>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      message: "你好主人，",
      city: "未知位置",
      temperature: "未知温度",
      weather: "未知天气",
      time: "",
    };
  },
  methods: {
    async getIp() {
      console.log("click!");
      let url =
        "https://restapi.amap.com/v3/ip?ip=45.78.1.54&output=json&key=e5e54579e6f39c4df1ca675b7a4f3d86";
      let respones = await fetch(url);
      if (respones.ok) {
        console.log(respones.ip);
        let json = await respones.json();
        console.log(json);
      } else {
        console.log("HTTP-Error", respones.status);
      }
    },
    async getWeather() {
      console.log("click!");
      let url =
        "https://restapi.amap.com/v3/weather/weatherInfo?key=e5e54579e6f39c4df1ca675b7a4f3d86&city=440113";
      let respones = await fetch(url);
      if (respones.ok) {
        let json = await respones.json();
        let info = json.lives[0];
        console.log(info);
        this.setInfo(info);
      } else {
        console.log("HTTP-Error:" + respones.status);
      }
    },
    setInfo(info) {
      this.city = info.city;
      this.temperature = info.temperature;
      this.weather = info.weather;
      this.time = info.reporttime;
    },
  },
};
</script>

<style scoped>
#maindiv {
  color: #cff;
}

h2 {
  color: aquamarine;
}
.time {
  color: black;
}
</style>
