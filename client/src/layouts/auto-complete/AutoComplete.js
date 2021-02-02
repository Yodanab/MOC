import React, { useState } from "react";
import InputField from "../input-field/InputField";
import { Suggestion, SuggestionContainer } from "./autoComplete.style";

const AutoComplete = ({ suggestions, addInstrument, label, placeholder }) => {
  const [autoComplete, setAutoComplete] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  let {
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    userInput,
  } = autoComplete;

  const handleChange = (e) => {
    const { value } = e.target;
    const userInput = value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setAutoComplete({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: value,
    });
  };
  const onClick = (e) => {
    if (!filteredSuggestions[activeSuggestion]) {
      return;
    }
    addInstrument(filteredSuggestions[activeSuggestion]);
    setAutoComplete({
      ...autoComplete,
      activeSuggestion: 0,
      showSuggestions: false,
      userInput: "",
    });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      //enter
      if (!filteredSuggestions[activeSuggestion]) {
        return;
      }
      addInstrument(filteredSuggestions[activeSuggestion]);
      setAutoComplete({
        ...autoComplete,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: "",
      });
    } else if (e.keyCode === 38) {
      //up arrow
      if (activeSuggestion === 0) {
        return;
      }

      setAutoComplete({
        ...autoComplete,
        activeSuggestion: activeSuggestion - 1,
      });
    } else if (e.keyCode === 40) {
      //down arrow
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setAutoComplete({
        ...autoComplete,
        activeSuggestion: activeSuggestion + 1,
      });
    } else if (e.keyCode === 39) {
      //right arrow
      setAutoComplete({
        ...autoComplete,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
  };

  const hoverSuggestion = (index) => {
    setAutoComplete({ ...autoComplete, activeSuggestion: index });
  };
  let suggestionsListComponent = () => {
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return filteredSuggestions.map((suggestion, index) => {
          let active = index === activeSuggestion ? true : false;
          return (
            <Suggestion
              active={active}
              key={index}
              onClick={onClick}
              onMouseEnter={() => hoverSuggestion(index)}>
              {suggestion}
            </Suggestion>
          );
        });
      } else {
        return <Suggestion>No suggestions </Suggestion>;
      }
    }
  };

  return (
    <>
      <InputField
        type="text"
        handleChange={handleChange}
        onKeyDown={onKeyDown}
        value={userInput}
        label={label}
        placeholder={placeholder}
      />
      <SuggestionContainer>{suggestionsListComponent()}</SuggestionContainer>
    </>
  );
};

export default AutoComplete;
