import React from 'react'

function makeDay(date) {
    const today = new Date().getDay();
    const nDate = new Date(date);
    const nDay = nDate.getDay();
    const day = (today + nDay) % 7


  return nDay
}

export default makeDay