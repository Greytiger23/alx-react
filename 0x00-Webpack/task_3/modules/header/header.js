import $ from 'jquery';
import '../css/header.css';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

$('body').prepend('<div id="logo"></div>');
$('body').prepend('<h1>Holberton Dashboard</h1>');

$('#logo').css({
  'width': '200px',
  'height': '200px',
  'background-image': `url(${logo})`,
  'background-size': '200px 200px',
});
