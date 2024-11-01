import { useState } from "react";
import {
  Container,
  BlurArea,
  CalendarArea,
  SubmitText,
  SubmitBtn,
  BtnArea,
} from "./styles";
import { Calendar } from "react-native-calendars";

export function CalendarModal({ closeModal, handleFilter }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({});

  function handleOnDayPress(date) {
    setCurrentDate(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: "#3b3dbf",
      textColor: "#FFF",
    };

    setSelectedDates(markedDay);
  }

  function handleFilterDate() {
    handleFilter(currentDate);
    closeModal();
  }

  return (
    <Container>
      <BlurArea onPress={closeModal} />
      <CalendarArea>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={selectedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: "#FF0000",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#FFF",
          }}
        />
        <BtnArea>
          <SubmitBtn onPress={handleFilterDate}>
            <SubmitText>Filtrar</SubmitText>
          </SubmitBtn>
        </BtnArea>
      </CalendarArea>
    </Container>
  );
}
