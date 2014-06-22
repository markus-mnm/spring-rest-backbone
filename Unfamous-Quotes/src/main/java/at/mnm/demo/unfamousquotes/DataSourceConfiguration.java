package at.mnm.demo.unfamousquotes;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.cloud.config.java.AbstractCloudConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

public class DataSourceConfiguration {
   private static Log logger = LogFactory.getLog(DataSourceConfiguration.class);

   @Configuration()
   // @Profile("default")
   // public static class LocalConfiguration {
   // @Bean(destroyMethod = "close")
   // public DataSource dataSource() {
   // logger.info(" local ");
   // DataSource ds = new DataSource();
   // ds.setDriverClassName(Driver.class.getName());
   // ds.setUrl("jdbc:h2:mem");
   // ds.setUsername("sa");
   // ds.setPassword("");
   // return ds;
   // }
   // }
   //
   // @Configuration()
   // @Profile("cloud")
   public static class CloudConfiguration extends AbstractCloudConfig {
      @Bean(destroyMethod = "close")
      public DataSource dataSource() {

         logger.info(" cloud : ${cloud.services.spring-mysql.connection.username}");
         // DataSource ds = new DataSource();
         // ds.setDriverClassName(com.mysql.jdbc.Driver.class.getName());
         // ds.setUrl("jdbc:mysql://${cloud.services.spring-mysql.connection.host}:${cloud.services.spring-mysql.connection.port}/${cloud.services.spring-mysql.connection.name}");
         // ds.setUsername("${cloud.services.spring-mysql.connection.username}");
         // ds.setPassword("${cloud.services.spring-mysql.connection.password}");
         return connectionFactory().dataSource();
      }
   }
}
