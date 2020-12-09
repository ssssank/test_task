<?php

function brackets($str) 
{
  $bracketsStack = [];
  $len = strlen($str);
  for ($i = 0; $i < $len; $i++) {
    if ($str[$i] === '{') {
      array_push($bracketsStack, '{');
    }
    if ($str[$i] === '}') {
      if (count($bracketsStack) === 0) {
        return false;
      }
      array_pop($bracketsStack);
    }
  }
  return count($bracketsStack) === 0;
}