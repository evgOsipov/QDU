<template>
  <v-container fluid class="analytics-page pa-6">

    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-5">
      <h1 class="page-title">{{ t('analytics.main.title') }}</h1>
      <v-text-field
        v-model="selectedDate"
        type="date"
        variant="outlined"
        density="compact"
        hide-details
        class="date-input"
      />
    </div>

    <!-- Top stats -->
    <v-row dense class="mb-4">
      <v-col v-for="stat in topStats" :key="stat.key" cols="12" sm="6" lg>
        <v-card elevation="1" rounded="lg" class="stat-card">
          <div class="pa-4">
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-value mt-1">
              <span :class="stat.highlight ? 'text-success' : 'text-dark'">{{ stat.value }}</span>
              <span v-if="stat.total" class="text-medium"> / {{ stat.total }}</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Content row -->
    <v-row dense class="mb-4">
      <!-- Daytime card with mini chart -->
      <v-col cols="12" md="5">
        <v-card elevation="1" rounded="lg" class="daytime-card">
          <div class="pa-4">
            <div class="stat-label mb-1">{{ t('analytics.main.daytime') }}</div>
            <div class="daytime-value">
              <span class="text-dark">1498</span>
              <span class="text-medium">/7438</span>
            </div>
            <v-chart :option="daytimeChartOption" autoresize class="daytime-chart" />
          </div>
        </v-card>
      </v-col>

      <!-- Section stats grid -->
      <v-col cols="12" md="7">
        <v-row dense>
          <v-col v-for="s in sectionStats" :key="s.key" cols="6" sm="4">
            <v-card elevation="1" rounded="lg" class="section-card">
              <div class="pa-4">
                <div class="stat-label">{{ s.label }}</div>
                <div class="section-value mt-1">
                  <span class="text-dark">{{ s.present }}</span>
                  <span class="text-medium">/{{ s.total }}</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Attendance chart -->
    <v-card elevation="1" rounded="lg">
      <div class="d-flex align-center justify-space-between pa-4 pb-0">
        <v-tabs v-model="activeTab" density="compact" color="primary">
          <v-tab value="students">{{ t('analytics.main.students') }}</v-tab>
          <v-tab value="teachers">{{ t('analytics.main.teachers') }}</v-tab>
        </v-tabs>
        <v-text-field
          v-model="chartDate"
          type="date"
          variant="outlined"
          density="compact"
          hide-details
          class="date-input"
        />
      </div>
      <v-divider />
      <v-chart :option="attendanceChartOption" autoresize class="attendance-chart" />
    </v-card>

  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import VChart from 'vue-echarts'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer])

const { t } = useI18n()

const selectedDate = ref('')
const chartDate = ref('')
const activeTab = ref('students')

const topStats = computed(() => [
  { key: 'students', label: t('analytics.main.studentsCount'), value: '11094', total: null, highlight: false },
  { key: 'teachers', label: t('analytics.main.teachersCount'), value: '700', total: null, highlight: false },
  { key: 'latecomers', label: t('analytics.main.latecomers'), value: '365', total: null, highlight: false },
  { key: 'cameras', label: t('analytics.main.cameraStatus'), value: '335', total: '371', highlight: true },
  { key: 'avgLate', label: t('analytics.main.avgLateMinutes'), value: '10', total: null, highlight: false },
])

const sectionStats = computed(() => [
  { key: 'secondHigher', label: t('analytics.main.secondHigher'), present: 0, total: 443 },
  { key: 'specialExternal', label: t('analytics.main.specialExternal'), present: 0, total: 0 },
  { key: 'external', label: t('analytics.main.external'), present: 0, total: 3037 },
  { key: 'evening', label: t('analytics.main.evening'), present: 0, total: 0 },
  { key: 'distance', label: t('analytics.main.distance'), present: 0, total: 64 },
  { key: 'combined', label: t('analytics.main.combined'), present: 0, total: 0 },
])

// Mini line chart for daytime card
const daytimeData = [180, 220, 200, 270, 310, 280, 380, 420, 400, 480, 460, 560, 640, 700, 780, 860, 960, 1080, 1180, 1320, 1498]

const daytimeChartOption = computed(() => ({
  grid: { top: 4, right: 4, bottom: 4, left: 4, containLabel: false },
  xAxis: { type: 'category', show: false, data: daytimeData.map((_, i) => i) },
  yAxis: { type: 'value', show: false },
  series: [
    {
      type: 'line',
      data: daytimeData,
      smooth: true,
      symbol: 'none',
      lineStyle: { color: '#12b76a', width: 2 },
      areaStyle: {
        color: {
          type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(18,183,106,0.18)' },
            { offset: 1, color: 'rgba(18,183,106,0)' },
          ],
        },
      },
    },
  ],
  tooltip: { show: false },
}))

// Main attendance chart
const xAxisData = [
  '2 Fevral', '3 Fevral', '4 Fevral', '5 Fevral', '6 Fevral', '7 Fevral',
  '9 Fevral', '10 Fevral', '12 Fevral', '13 Fevral', '14 Fevral', '15 Fevral',
  '16 Fevral', '18 Fevral', '19 Fevral', '20 Fevral', '21 Fevral', '23 Fevral', '24 Fevral',
]

const studentsData = {
  present: [1200, 1350, 1100, 750, 220, 340, 1350, 1498, 1200, 1550, 1620, 1700, 1580, 1380, 1260, 1180, 1060, 980, 1100],
  absent: [5800, 4420, 4120, 6360, 6510, 6760, 4110, 5940, 5020, 4760, 3560, 3420, 5620, 6360, 6920, 6020, 4120, 6220, 5920],
}

const teachersData = {
  present: [480, 510, 430, 380, 120, 160, 530, 580, 490, 600, 620, 650, 610, 540, 500, 470, 420, 390, 440],
  absent: [220, 190, 270, 320, 580, 540, 170, 120, 210, 100, 80, 50, 90, 160, 200, 230, 280, 310, 260],
}

const attendanceChartOption = computed(() => {
  const data = activeTab.value === 'students' ? studentsData : teachersData
  const present = t('analytics.main.present')
  const absent = t('analytics.main.absent')
  return {
    grid: { top: 20, right: 24, bottom: 56, left: 60 },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
    },
    legend: {
      bottom: 8,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      textStyle: { color: '#667085', fontSize: 12 },
      data: [present, absent],
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#e5e7eb' } },
      axisTick: { show: false },
      axisLabel: { color: '#9ca3af', fontSize: 11 },
      splitLine: { show: true, lineStyle: { color: '#f3f4f6', type: 'dashed' } },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#9ca3af', fontSize: 11 },
      splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } },
    },
    series: [
      {
        name: present,
        type: 'line',
        data: data.present,
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: { color: '#7f56d9', width: 2 },
        itemStyle: { color: '#7f56d9' },
      },
      {
        name: absent,
        type: 'line',
        data: data.absent,
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        lineStyle: { color: '#f79009', width: 2 },
        itemStyle: { color: '#f79009' },
      },
    ],
  }
})
</script>

<style scoped>
.analytics-page {
  background-color: #f9fafb;
  min-height: 100%;
}

.page-title {
  font-size: 20px;
  font-weight: 600;
  color: #181d27;
}

.date-input {
  max-width: 160px;
}

.stat-label {
  font-size: 12px;
  color: #667085;
}

.stat-value {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
}

.text-dark { color: #181d27; }
.text-medium { color: #667085; }

.daytime-card {
  height: 200px;
}

.daytime-value {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
}

.daytime-chart {
  height: 100px;
  margin-top: 12px;
}

.section-card {
  height: 96px;
}

.section-value {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
}

.attendance-chart {
  height: 340px;
  width: 100%;
}
</style>
