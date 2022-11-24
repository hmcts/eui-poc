package uk.gov.hmcts.nfdivcaseapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "uk.gov.hmcts")
public class NfdivCaseApiApplication {

  public static void main(String[] args) {
    SpringApplication.run(NfdivCaseApiApplication.class, args);
  }
}
