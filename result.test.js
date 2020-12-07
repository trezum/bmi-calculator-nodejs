describe('BMI Functional', () => {

  it('Should not have a sucess alert', async () => {
      await page.goto('http://localhost:8080/result?cm=0&kg=100&hip=1&waist=1');
      let alertText = await page.evaluate(() => {
          let el = document.querySelector(".alert")
          return el ? el.innerText : ""
        })

      await expect(alertText).toBe("")
    });  

    it('Should have a sucess alert with the bmi value', async () => {
      await page.goto('http://localhost:8080/result?cm=185&kg=100&hip=1&waist=1');
      let alertText = await page.evaluate(() => {
          let el = document.querySelector(".alert")
          return el ? el.innerText : ""
        })

        await expect(alertText).toMatch(/(29.22)/i)
    });  
});

describe('BMI Categories', () => {
    
    it('Should have a Obese Category displayed', async () => {
      await page.goto('http://localhost:8080/result?cm=185&kg=200&hip=1&waist=1');
      let alertText = await page.evaluate(() => {
          let el = document.querySelector(".alert")
          return el ? el.innerText : ""
        })

        await expect(alertText).toMatch(/(Obese)/i)
    });  

    it('Should have a Underweight Category displayed', async () => {
      await page.goto('http://localhost:8080/result?cm=185&kg=50&hip=1&waist=1');
      let alertText = await page.evaluate(() => {
          let el = document.querySelector(".alert")
          return el ? el.innerText : ""
        })

        await expect(alertText).toMatch(/(Underweight)/i)
    });

    it('Should have a Healthy weight Category displayed', async () => {
      await page.goto('http://localhost:8080/result?cm=185&kg=70&hip=1&waist=1');
      let alertText = await page.evaluate(() => {
          let el = document.querySelector(".alert")
          return el ? el.innerText : ""
        })

        await expect(alertText).toMatch(/(Healthy weight)/i)
    });  

    it('Should have a Overweight Category displayed', async () => {
      await page.goto('http://localhost:8080/result?cm=185&kg=100&hip=1&waist=1');
      let alertText = await page.evaluate(() => {
          let el = document.querySelector(".alert")
          return el ? el.innerText : ""
        })

        await expect(alertText).toMatch(/(Overweight)/i)
    });
});

describe('Hip to waist Categories', () => {
    
  it('Should have a Normal-weight Category displayed', async () => {
    await page.goto('http://localhost:8080/result?cm=185&kg=100&hip=80&waist=100');
    let alertText = await page.evaluate(() => {
        let el = document.querySelector(".alert")
        return el ? el.innerText : ""
      })

      await expect(alertText).toMatch(/(Normal-weight)/i)
  });

  it('Should have a over-weight Category displayed', async () => {
    await page.goto('http://localhost:8080/result?cm=185&kg=100&hip=95&waist=100');
    let alertText = await page.evaluate(() => {
        let el = document.querySelector(".alert")
        return el ? el.innerText : ""
      })

      await expect(alertText).toMatch(/(Over-weight)/i)
  });  

  it('Should have a Obesity Category displayed', async () => {
    await page.goto('http://localhost:8080/result?cm=185&kg=100&hip=110&waist=100');
    let alertText = await page.evaluate(() => {
        let el = document.querySelector(".alert")
        return el ? el.innerText : ""
      })

      await expect(alertText).toMatch(/(Obesity)/i)
  });
});