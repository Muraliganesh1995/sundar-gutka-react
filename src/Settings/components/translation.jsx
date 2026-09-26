import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Switch } from "react-native";
import {
  toggleEnglishTranslation,
  togglePunjabiTranslation,
  toggleSpanishTranslation,
  toggleTeluguTranslation,
} from "../../common/actions";
import { STRINGS, colors, constant } from "@common";
import styles from "../styles/styles";
import { nightModeStyles } from "../styles/nightModeStyles";

const TranslationComponent = () => {
  const dispatch = useDispatch();
  const isNightMode = useSelector((state) => state.isNightMode);
  const isEnglishTranslation = useSelector((state) => state.isEnglishTranslation);
  const isPunjabiTranslation = useSelector((state) => state.isPunjabiTranslation);
  const isSpanishTranslation = useSelector((state) => state.isSpanishTranslation);
  const isTeluguTranslation = useSelector((state) => state.isTeluguTranslation);

  const { titleStyle, row, borderBottom } = styles;
  const { titleNightStyle, borderBottomNightStyle } = nightModeStyles(isNightMode);

  return (
    <View style={[borderBottom, borderBottomNightStyle]}>
      <Text style={[titleStyle, titleNightStyle]}>{STRINGS.TRANSLATIONS}</Text>
      
      {/* English Switch */}
      <View style={row}>
        <Text style={[titleStyle, titleNightStyle]}>{STRINGS.ENGLISH}</Text>
        <Switch
          value={isEnglishTranslation}
          onValueChange={(val) => dispatch(toggleEnglishTranslation(val))}
        />
      </View>

      {/* Punjabi Switch */}
      <View style={row}>
        <Text style={[titleStyle, titleNightStyle]}>{constant.PUNJABI}</Text>
        <Switch
          value={isPunjabiTranslation}
          onValueChange={(val) => dispatch(togglePunjabiTranslation(val))}
        />
      </View>

      {/* Spanish Switch */}
      <View style={row}>
        <Text style={[titleStyle, titleNightStyle]}>{constant.ESPANOL}</Text>
        <Switch
          value={isSpanishTranslation}
          onValueChange={(val) => dispatch(toggleSpanishTranslation(val))}
        />
      </View>

      {/* Telugu Switch */}
      <View style={row}>
        <Text style={[titleStyle, titleNightStyle]}>{constant.TELUGU_UNICODE}</Text>
        <Switch
          value={isTeluguTranslation}
          onValueChange={(val) => dispatch(toggleTeluguTranslation(val))}
        />
      </View>
    </View>
  );
};

export default TranslationComponent;
