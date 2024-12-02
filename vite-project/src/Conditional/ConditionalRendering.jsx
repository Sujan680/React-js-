/* eslint-disable react/prop-types */
const ConditionalRendering = () => {
  return (
    <div>
      <Password isValid="true" />
    </div>
  );
};
export default ConditionalRendering;

const ValidPassword = () => <h2> Valid Password </h2>;

const InvalidPassword = () => <h2>Invalid Password</h2>;

const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   } else {
//     return <InvalidPassword />;
//   }

return isValid ? <ValidPassword/> : <InvalidPassword/>
};
